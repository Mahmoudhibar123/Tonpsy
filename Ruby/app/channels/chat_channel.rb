class ChatChannel < ApplicationCable::Channel

	rescue_from 'MyError', with: :deliver_error_message

	def subscribed
		stream_from "ChatRoom_#{current_user.id.to_i}"
	end

	def unsubscribed

	end
  
  def accept_call(data)
    to = data['to']
    hash = {isAccepted: true}
    ActionCable.server.broadcast( "ChatRoom_#{to.to_i}" , hash)
  end
  
  def join_call(data)
  
    to = data['to']
    if data['desc']
      desc = data['desc']
       hash = { desc: desc, from: data['from']}
    else
      candidate = data['candidate']
      hash = { candidate: candidate, from: data['from']}
    end
    ActionCable.server.broadcast( "ChatRoom_#{to.to_i}" , hash)
  end
  
  def start_call(data)
    to = data['to']
    ActionCable.server.broadcast( "ChatRoom_#{to.to_i}" , hash)
  end
  

 
	private

	def deliver_error_message(e)

	end
  
	def build_room_id(id)
		"ChatRoom_#{id.to_i}"
	end

end
