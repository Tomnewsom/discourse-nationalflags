# Discourse Group Badges PLugin

Adds stylable badges for every group a user is a member of

# Installing

* Add the plugin's repo url to your container's `app.yml` file

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/tomnewsom/discourse-groupbadges.git
```

* Rebuild the container

```
cd /var/discourse
git pull
./launcher rebuild app
```


See https://meta.discourse.org/t/install-a-plugin/19157/14

# License

MIT
