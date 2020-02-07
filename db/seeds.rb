ActiveRecord::Base.transaction do
    User.destroy_all
    
    User.create!([
        {username: "phong", password: "hunter2"},
        {username: "tommy", password: "hunter2"}
    ])
    
end

