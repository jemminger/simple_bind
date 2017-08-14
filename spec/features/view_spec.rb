require 'spec_helper'

feature 'View integration' do
  it 'verify simple_bind.js does not raise JS errors', js: true do
    visit '/'

    expect([200, 304].include? page.status_code).to be true
  end
end
