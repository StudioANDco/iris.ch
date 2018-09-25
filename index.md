---
title: Iris T. Badass!
layout: base
---

<div class="grid grid--middle grid--multiline">
    {% assign projects = site.projects | where_exp:'item', "item.order > 0" | sort: 'order' %}
    {% for project in projects %}
        <div class="grid__item w-1/2 md-w-1/3">
            {% capture link_url %}{{ site.url}}/projects/{{ project.slug }}{% endcapture %}
            <a href="{{ link_url }}">
                <img class="" src="{{ project.thumbnail }}">
            </a>
        </div>
    {% endfor %}
</div>
