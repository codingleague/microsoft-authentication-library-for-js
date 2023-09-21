window.BENCHMARK_DATA = {
  "lastUpdate": 1695268186418,
  "repoUrl": "https://github.com/codingleague/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0cad734bb8ded0a17c9eeedfd8d25c7717bbf6a7",
          "message": "Refactor remaining errors for reduced size (#6497)\n\nCompletes the error refactor for NativeAuthError, JoseHeaderError and\r\nAuthError classes",
          "timestamp": "2023-09-20T09:11:35-07:00",
          "tree_id": "a99fc3cc1c464f5565e21baf5f052b54c443e791",
          "url": "https://github.com/codingleague/microsoft-authentication-library-for-js/commit/0cad734bb8ded0a17c9eeedfd8d25c7717bbf6a7"
        },
        "date": 1695268183870,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 151751,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "230 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 150153,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "230 samples"
          }
        ]
      }
    ]
  }
}