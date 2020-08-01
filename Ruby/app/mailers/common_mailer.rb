class CommonMailer < ApplicationMailer
    default from: 'hr@devinventive.com'
 
    def welcome_email(user)
      email = user.email
      @user = user
      mail(:to => email, :subject => 'Welcome to Talk Space')
    end
 
    def booking_email(user,appointedby,booking)
      email = user.email
      @user = user
      @appointedby = appointedby
      @booking = booking
      mail(:to => email, :subject => 'New Appointment Arrived ')
    end
 
    def booking_accept_email(user,appointedby,booking)
      email = appointedby.email
      @user = user
      @appointedby = appointedby
      @booking = booking
      mail(:to => email, :subject => 'Appointment Accepted ')
    end
 
    def booking_reject_email(user,appointedby,booking)
      email = appointedby.email
      @user = user
      @appointedby = appointedby
      @booking = booking
      mail(:to => email, :subject => 'Appointment Rejected ')
    end
 
    def payment_sucess_therapist_email(user,appointedby,booking)
      email = user.email
      @user = user
      @appointedby = appointedby
      @booking = booking
      mail(:to => email, :subject => 'Payment sucess')
    end
 
    def payment_sucess_user_email(appointedby,user,booking)
      email = appointedby.email
      @user = user
      @appointedby = appointedby
      @booking = booking
      mail(:to => email, :subject => 'Payment sucess')
    end
end
