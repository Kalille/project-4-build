class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :authorize

  private


  def authorize

    @current_user ||= User.find(session[:user_id])

  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found(exception)
    render json: { errors: ["#{exception.model}"] }, status: :not_found unless current_user

  end

end
