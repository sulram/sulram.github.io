# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  
  templateData:
    site:
      url: "/"

  plugins:

    tags:
      extension: '.html.jade'
      injectDocumentHelper: (document) ->
        document.setMeta(
          layout: 'master'
          data: """
            != partial('tags')
            """
        )

    ghpages:
        deployRemote: 'origin'
        deployBranch: 'master'

}

# Export the DocPad Configuration
module.exports = docpadConfig