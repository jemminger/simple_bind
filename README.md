# Simple Bind

[![Build Status](https://travis-ci.org/simple-bind/simple_bind.svg?branch=master)](https://travis-ci.org/simple-bind/simple_bind)

*NOTE*: This gem has just begun development. Many changes are going to be made often and can be breaking.

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

    <%= content_tag :span, @object.name, bind: @object.object_id %>

#### Result

![Simple Bind Input Text Field Result](https://github.com/simple-bind/simple_bind/raw/master/images/input_text_field_result.gif)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/simple-bind/simple_bind. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The MIT License (MIT)

Copyright (c) 2017 Dave Kimura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


## Code of Conduct

Everyone interacting in the SimpleBind project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/simple-bind/simple_bind/blob/master/CODE_OF_CONDUCT.md).
