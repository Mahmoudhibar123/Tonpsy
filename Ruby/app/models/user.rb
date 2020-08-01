class User < ApplicationRecord
  has_secure_password

  ROLES = { 0 => "CUSTOMER", 1 => "THERAPIST", 2 => "SUPERADMIN" }

  has_one_attached :avatar

  has_many :bookings
  has_many :payments, through: :bookings

  has_one :doctor

  # after_create :trigger_registration_email
  validates :username, presence: true, uniqueness: true, length: { minimum: 4 }
  validates :email, presence: true, uniqueness: true
  validates :role, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  default_scope            { where.not(role: 2) }
  scope :with_role,     -> (role){ where(role: role) }
  scope :active,        -> { where(active: true) }

  def trigger_registration_email
    CommonMailer.welcome_email(self).deliver_now
  end

  def role
    ROLES[self.read_attribute(:role)]
  end

  def update_doc_image(avatar)
    doc = self.doctor
    doc.avatar = avatar
    doc.save
  end
end