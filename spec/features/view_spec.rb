require 'spec_helper'

feature 'View integration' do
  it 'verify simple_bind.js does not raise JS errors', js: true do
    visit '/'
    expect(page.status_code).to be 200
  end
end
