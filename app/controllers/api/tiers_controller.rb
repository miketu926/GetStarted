class Api::TiersController < ApplicationController

  # is index necessary? Use project's index to show tiers through associations?
  def index
    @tiers = Tier.includes(:project).all
  end

  def new
    @ptier = Tier.new
    render :new
  end

  def create
    @tier = tiers.new(tier_params)
    if @tier.save
    else
      render json: @tier.errors.full_messages, status: 422
    end
  end
  
  private

  def tier_params
    params.require(:tier).permit(:title, :description, :amount, :project_id)
  end

end