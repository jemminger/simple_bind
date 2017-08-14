require 'spec_helper'

feature 'Test functionality' do
  it 'Change text', js: true do
    visit '/'
    test_text = 'This is a test message to ensure that the string is updated'
    fill_in :name, with: test_text
    expect(find('#span_text_tag')).to have_content test_text
  end

  it 'Change select', js: true do
    visit '/'
    select_by_value 'select_input', 'second_option'
    expect(find('#span_select_tag')).to have_content 'Second Option'
  end
end
