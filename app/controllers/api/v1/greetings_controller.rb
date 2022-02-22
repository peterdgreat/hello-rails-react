class Api::V1::GreetingsController < ApplicationController
  def index
    render json: {
      message: "Hello, world!"
    }
    
  end

  def show
  end
end
