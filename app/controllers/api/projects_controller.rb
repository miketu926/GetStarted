class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.includes(:user).find(params[:id]);
    render :show
  end

  def new
    @project = current_user.projects.new
    current_user
    render :new
  end

  def create
    @project = current_user.projects.new(project_params)
    @project.project_picture.attach(params[:project][:project_image])
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
    @project = current_user.projects.find(params[:id])
  end

  def update
    @project = current_user.projects.find(params[:id])

    if @project.update_attributes
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render :index
  end


  private
  
  def project_params
    params.require(:project).permit(:project, :description, :category,
      :photo, :goal_amt, :location, :funded_amt, :duration_days, :user_id)
  end
  
end