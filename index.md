---
title: Iris T. Badass!
layout: base
---

<div class="columns">
    {% assign projects = site.projects | where_exp:'item', "item.order > 0" | sort: 'order' %}
    {% for project in projects %}
        <div>
            {% capture link_url %}projects/{{ project.slug }}{% endcapture %}
            <a href="{{ link_url | absolute_url }}">
                <img class="img-responsive" src="{{ project.thumbnail | absolute_url }}">
            </a>
        </div>
    {% endfor %}
</div>
