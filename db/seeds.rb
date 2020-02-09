ActiveRecord::Base.transaction do
    User.destroy_all
    
    User.create!([
        {username: "phong", password: "hunter2", email: "phong@aa.com"},
        {username: "tommy", password: "hunter2", email: "tommy@aa.com"}
    ])
    
end

