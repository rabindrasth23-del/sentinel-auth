import urllib.request
import traceback

url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzdkZjFkMDlmNGY4ZjQwN2ZhMjA2Y2Y2MjM0NGM4MzMwEgsSBxCUj6HjywgYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjgzMzU3NTcyMTM4NDkzMDA4&filename=&opi=89354086"
try:
    print(f"Downloading from {url}")
    urllib.request.urlretrieve(url, "admin_dashboard_stitch.html")
    print("Download complete.")
except Exception as e:
    print("Download failed:")
    traceback.print_exc()
