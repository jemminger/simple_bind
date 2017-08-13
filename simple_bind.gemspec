# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "simple_bind/version"

Gem::Specification.new do |spec|
  spec.name          = "simple_bind"
  spec.version       = SimpleBind::VERSION
  spec.authors       = ["Dave Kimura", "Jeremy Samples"]
  spec.email         = ["dave@k-innovations.net"]

  spec.summary       = %q{Data Binding for HTML Inputs and components in Rails}
  spec.description   = %q{}
  spec.homepage      = "https://www.github.com/simple-bind/simple_bind"
  spec.license       = "MIT"

  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "http://rubygems.org"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]
  spec.test_files    = Dir["spec/**/*"]

  
  spec.add_development_dependency 'jquery-rails', '>= 3.1.0'
  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency 'rails', '~> 5.1.0'
  spec.add_development_dependency 'rspec-rails', '~> 3.0'
  spec.add_development_dependency 'capybara', '~> 2.6'
  spec.add_development_dependency 'poltergeist', '~> 1.16.0'
  spec.add_development_dependency 'sqlite3', '~> 1.3'
end
