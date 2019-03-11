# == Schema Information
#
# Table name: tiers
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string           not null
#  amount      :integer          not null
#  num_backers :integer
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tier < ApplicationRecord
  validates_presence_of :title, :description, :amount
  validates :project_id, uniqueness: { scope: :amount }

  belongs_to :project
  
end