#!/usr/bin/env ruby
require 'fileutils'
@base_path = Dir.pwd
#@base_path = './'
@files = [
	'app.js',
	'config.js'
		 # 'login.js',
		 # 'middle.js',
		 # 'rails.js',
]

@folders = [
	#'routes',
	'socket',
	'api',
	'helpers',
]

def obscure
	# system('node compilador.js prod')
	Dir.chdir("#{@base_path}")
	Dir.chdir("client")
	Dir.chdir("src/environments")
	# system('cp environment.produccion.ts environment.prod.ts')
	Dir.chdir("../../")
	#system("ng build --output-path='dist' --prod --aot")
	Dir.chdir("../")
	#
	system('rm -R production')
	system('mkdir production')
	system('mkdir production/client')
	system('cp -R node_modules production/')
	system('cp -R client/dist production/client/dist/')
	Dir.chdir("production")
	@files.each do |file|
		puts file
		system("javascript-obfuscator ../#{file} --output #{file}")
	end 
	@folders.each do |folder|
		puts folder
		system("javascript-obfuscator ../#{folder} --output #{folder}")
	end 
end

obscure
