# jsonLanGen
ng2-translate language file generator from a single json

Create a `translations.main.json` file with the following structure:
```
[
    {
        "key": "greeting",
        "langs": ["en","es","it"],
        "trans": ["hello world", "hola mundo", "ciao mondo"]
    },
    {
        "key": "farewell",
        "langs": ["en","es","it"],
        "trans": ["goodbye world", "adios mundo", "ciao mondo"]
    }
]
```

A file will be created for each element of the langs array. The file above will result in the following structure:
```
translations.main.json
i18n
  ├─ en.json
  └─ es.json
```
