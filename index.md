---
layout: default
title: 홈
---

# 환영합니다.
- 이곳은 Jekyll로 만든 블로그 입니다.

> 시스템 클라우드 엔지니어를 목표로 공부중

# 최근 포스터
{% for post in site.posts %}
- [{{ post.title }}] ({{ post.url }} - {{ post.data | data: "%Y년 %n월 %d일" }}
{ % endfor %}
