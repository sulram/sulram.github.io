module.exports =

	templateData:
		site:
			url: "/"
			
	#plugins:
	#	datefromfilename:
	#		removeDate: true
	#		dateRegExp: /\b(\d{4})-(\d{2})-/

	plugins:
		ghpages:
			deployRemote: 'origin'
			deployBranch: 'master'

	# =================================
	# Environments

	environments:
		development:
			outPath: 'dev-out'
			templateData:
				site:
					url: '/'