class Api::ProjectsController < ApplicationController

  def index
    if search_term
      @projects = Project.includes(:user)
        .where('project LIKE ?', search_term_str)
    else
      @projects = Project.includes(:user).all
    end

    render :index
  end

  def show
    current_user
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
    @projects = Project.includes(:user).all
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render :index
  end


  private
  
  def project_params
    params.require(:project).permit(:project, :description, :category,
      :photo, :goal_amt, :location, :project_picture,
      :funded_amt, :duration_days, :user_id)
  end

  def search_term
    params[:searchTerm]
  end

  def search_term_str
    "%" + params[:searchTerm] + "%"
  end

end