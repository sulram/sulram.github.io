module.exports =

	templateData:
		site:
			url: "/"
			
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
					url: '/'