# Simple Bind

Simple Bind's goal is to give a realtime feel to your Ruby on Rails application without the added weight of a Javascript framework while being as unobtrusive as possible.

## Basic Functionality Goals

When content changes in a HTML Input field, update labels and/or display elements on your browser automatically. *Note*: this is not Two Way Data Binding and any changes would only be reflected on the browser in which the changes were made.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'simple_bind'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install simple_bind

## Usage

### In `application.js`

    //= require simple_bind

### In Views

Within the views, there are two parts for the data bind. You have to select an input to be the binder and some element to be the listener.

#### Binder

For the binder, we create a data attribute called `data-bind` and set it to some ID. This should be a unique value so it does not conflict with other data binds on the current view.

    <%= form_with model: @object do |f| %>
      <%= f.text_field :name, data: { bind: @object.object_id } %>
    <% end %>

#### Listener

For the listener, we create an attribute called `bind` and have it set to the same ID as the Binder.

    <%= content_tag :span, @template.name, bind: @template.object_id %>

#### Result

![Simple Bind Input Text Field Result](https://github.com/simple-bind/simple_bind/raw/master/images/input_text_field_result.gif)

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/simple_bind. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the SimpleBind project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/[USERNAME]/simple_bind/blob/master/CODE_OF_CONDUCT.md).
