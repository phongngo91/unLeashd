# final-proj-first-draft

DISCLAIMER: DO NOT ROLL OUT YOUR OWN AUTH PATTERN

1) To build the final project TDD style with rspec

2) As of 1/26/2020, the corriculum is not yet at OAUTH2.0 yet, this project will roll out its own user authentication, for educational purposes.

3)

## rails integration setup guide

* ` Create a new rails project using --database=postgresql and --skip-turbolinks

* `Update your Gemfile with pry-rails, binding_of_caller, better_errors and annotate

As of Rails 5.1.2, Rails no longer includes jQuery by default. To allow us to use $.ajax, include the following:

include gem 'jquery-rails' in your Gemfile
Include //= require jquery and //= require jquery_ujs in application.js above //= require_tree .
