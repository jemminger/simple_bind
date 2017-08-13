require 'spec_helper'

feature 'Test functionality' do
  it 'Change text', js: true do
    visit '/'
    test_text = 'This is a test message to ensure that the string is updated'
    fill_in :name, with: test_text
    expect(find('#spantag')).to have_content test_text
  end
end
