module.exports =

	templateData:
		site:
			url: "http://marlus.com"
			
	#plugins:
	#	datefromfilename:
	#		removeDate: true
	#		dateRegExp: /\b(\d{4})-(\d{2})-/

	# =================================
	# Environments

	environments:
		development:
			outPath: 'dev-out'
			templateData:
				site:
					url: 'http://localhost:9778'