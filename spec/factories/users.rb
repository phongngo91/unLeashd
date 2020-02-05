FactoryBot.define do
  factory :user do
    username { Faker::Internet.user_name }
    password {"password"}

    factory :user_hw do
      username {"hello_world"}
    end

    factory :user_foo do
      username {"foo_bar"}
    end
  end
end