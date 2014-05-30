require "rubygems"
require "listen"

puts "compiling..."
system `handlebars handlebars/*.handlebars -f javascript/templates.js`
puts "listening for changes..."

listener = Listen.to('handlebars') do |modified, added, removed|
	modified.each do |m|
		puts "modified #{m.split('/').last}" 
	end
	added.each do |a|
		puts "added #{a.split('/').last}" 
	end
	removed.each do |r|
		puts "removed #{r.split('/').last}" 
	end
	puts "recompiling..."
	system `handlebars handlebars/*.handlebars -f javascript/templates.js`
	puts "listening for changes..."
end
listener.start # not blocking
sleep