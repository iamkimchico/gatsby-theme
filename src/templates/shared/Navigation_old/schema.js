export const navigation = {
  "Content" : {
    "navigation_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Navigation Title"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Navigation ID"
      }
    },
    "body" : {
      "type" : "Slices",
      "fieldset" : "Slice zone",
      "config" : {
        "labels" : null,
        "choices" : {
          "link_list" : {
            "type" : "Slice",
            "fieldset" : "Link List",
            "description" : "A List of links",
            "icon" : "format_list_bulleted",
            "display" : "list",
            "non-repeat" : {
              "header1" : {
                "type" : "Text",
                "config" : {
                  "label" : "Header"
                }
              }
            },
            "repeat" : {
              "link_label" : {
                "type" : "Text",
                "config" : {
                  "label" : "Link Label",
                  "placeholder" : "Insert the text to click on"
                }
              },
              "link_url" : {
                "type" : "Link",
                "config" : {
                  "allowTargetBlank" : true,
                  "label" : "Link Url",
                  "placeholder" : "Insert link to external website or internal page"
                }
              }
            }
          }
        }
      }
    }
  }
}