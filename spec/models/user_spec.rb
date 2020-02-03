require 'rails_helper'

RSpec.describe User, type: :model do
    subject(:user) do
        User.create!(
            username: "gerald",
            password: "super_secret_password"
        )
    end

    describe "password encryption" do
        it "does not save password to the database" do
            User.create!(username: "mary_mack", password: "abcdef")
            user = User.find_by(username: "mary_mack")
            expect(user.password).to_not be("abcdef")
        end
    end
end