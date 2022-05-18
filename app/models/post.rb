class Post < ApplicationRecord
  belongs_to :user
  belongs_to :tag
  has_many :favorites
  has_many :users, through: :favorites

  validates :name, presence: true
  validates :description, presence: true
  validates :tag_id, presence: true
end
