class CallsController < ApplicationController
  
  def index
    
  end
  
  def create
     hash = {to: params[:to], from: params[:from] , type: params[:type], sdp: params[:sdp]}
     room = "ChatRoom_#{params[:to].to_i}"
     ActionCable.server.broadcast(room, hash)
    
    render json: {
      status: :created
    }
  end
  
  def accept_call
    
    
  end
  
  def reject_call
    
  end
  
  private
  
  def call_params
    params.permit(:type, :from, :to, :sdp)
  end
  
end
