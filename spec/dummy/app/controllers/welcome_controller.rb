class WelcomeController < ApplicationController
  def index
    Struct.new('Object', :name, :address)
    @object = Struct::Object.new("Dave", "123 Main")
  end
end
