class Doctor < ApplicationRecord
  has_one_attached :avatar
  has_one_attached :certificate

  has_many :specialists
  has_many :bookings
  has_many :payments, through: :bookings
  has_many :treatments

  belongs_to :user, optional: true

  scope :with_treatment_like, -> (treatment) { joins(:treatments).where('treatments.name LIKE ?', "#{treatment}%") }

  def total_payments
    payments.placed.inject(0){|sum, n| sum+n.amount}.to_i
  end
end
