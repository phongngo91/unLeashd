require 'rails_helper'

RSpec.describe User, type: :model do
    subject(:user) do
        User.create!(
            username: "gerald",
            password: "super_secret_password"
        )
    end
end