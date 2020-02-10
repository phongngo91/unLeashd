ActiveRecord::Base.transaction do
    User.destroy_all
    
    User.create!([
        {username: "phong", password: "hunter2", email: "phong@aa.com", first_name: "phong", last_name: "ngo"},
        {username: "tommy", password: "hunter2", email: "tommy@aa.com", first_name: "tommy", last_name: "doe"}
    ])
    
end

