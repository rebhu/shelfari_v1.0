class Book < ActiveRecord::Base
  attr_accessible :author, :title, :read
  def self.search(search)
  if search
    find(:all, :conditions => ['title LIKE ? OR author LIKE ?', "%#{search}%" ,"%#{search}%"])
  else
    find(:all)
  end
end
end
