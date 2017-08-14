require 'spec_helper'

feature 'Assets integration' do
  it 'provides simple_bind.js on the asset pipeline' do
    visit '/assets/simple_bind.js'
    expect(page.status_code).to be 200
  end
end
