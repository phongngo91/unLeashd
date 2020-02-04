require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module UnLeashd
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.generators do |g|
      g.test_framework :rspec,
        :fixtures => false,
        :view_specs => false,
        :helper_specs => false,
        :router_specs => false,
        :controller_specs => true,
        :request_specs => false
      g.fixture_replacement :factory_bot, :dir => "spec/factories"
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
