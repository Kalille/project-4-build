class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :authorize

  private


  def authorize

    @current_user ||= User.find(session[:user_id])

  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user

  end

end
