# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {


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
}

# Export the DocPad Configuration
module.exports = docpadConfig