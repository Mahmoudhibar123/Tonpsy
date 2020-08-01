class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.references  :booking, null: false, foreign_key: true
      t.decimal     :amount
      t.integer     :status, null: false, default: 0
      t.datetime    :payment_date
      t.string      :card_type
      t.string      :transaction_id
      t.string      :currency
      t.text        :description

      t.timestamps
    end
  end
end
