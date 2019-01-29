# == Schema Information
#
# Table name: projects
#
#  id              :bigint(8)        not null, primary key
#  project         :string           not null
#  description     :string           not null
#  category        :string           not null
#  project_picture :string
#  goal_amt        :integer          not null
#  funded_amt      :integer          not null
#  duration_days   :integer          not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Project < ApplicationRecord
  validates :project, presence: true, uniqueness: true
  validates_presence_of :description, :category, :goal_amt, :funded_amt, :duration_days

  belongs_to :user
  has_one_attached :project_picture

  
  
end
