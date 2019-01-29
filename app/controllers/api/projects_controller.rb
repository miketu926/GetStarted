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
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :new
    else
      render @project.errors.full_messages
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
      render @project.errors.full_messages
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render :index
  end


  private
  
  def project_params
    params.require(:project).permit(:project, :description,
    :category, :photo, :goal_amt,
    :funded_amt, :duration_days, :user_id)
  end
  
end