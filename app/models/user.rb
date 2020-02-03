class User < ApplicationRecord

    attr_reader :password
    
    def password=(password)
        @password = password
    end
    
end
