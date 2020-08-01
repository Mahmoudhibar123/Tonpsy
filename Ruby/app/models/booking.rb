class Booking < ApplicationRecord
  BOOKING_STATUS = { 0 => "PENDING", 1 => "ACCEPTED", 2 => "REJECTED", 3 => "PAID" }

  has_one :payment

  belongs_to :doctor
  belongs_to :user

  validates :book_date, presence: true
  validates :timeslot, presence: true
  validates :status, presence: true

  scope :paid_bookings, -> { joins(:payment).where('payments.status = ?', Payment::PLACED) }

  def status
    BOOKING_STATUS[self.read_attribute(:status)]
  end
end
