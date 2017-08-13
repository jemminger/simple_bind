ENV['RAILS_ENV'] ||= 'test'

require File.expand_path("../dummy/config/environment.rb",  __FILE__)
require 'rspec/rails'
require 'capybara/rspec'
require 'capybara/poltergeist'
Capybara.javascript_driver = :poltergeist
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {js_errors: true})
end