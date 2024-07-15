---
title: Schedule
layout: page
nav_order: 2
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    table {
    width: 100%;
    border-collapse: collapse;
    /* border-radius: 10px; */ /* Rounded corners */
    overflow: hidden; /* Ensure rounded corners appear properly */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */ /* Drop shadow for a raised effect */
    font-family: Arial, sans-serif;
    background-color: #000; /* Dark gray background */
    color: black; /* White text */
    }
    td a:link {color: #87CEEB; /* Original link color */}
    td a:visited {color: pink; /* Original visited link color */}
    th, td {padding: 12px; text-align: left; border-right: 1px solid white; /* Vertical lines between columns */}
    th:first-child, td:first-child {border-left: 1px solid white; /* Vertical line at the beginning */}
    th {background-color: #733635; /* Darker gray background for headers */}
    tbody tr:hover {background-color: #444; /* Slightly lighter gray background on hover */}
    /* Set widths for each column */
    th:nth-child(1), td:nth-child(1) {width: 20%;}
    th:nth-child(2),
    td:nth-child(2),
    th:nth-child(3),
    td:nth-child(3),
    th:nth-child(4),
    td:nth-child(4),
    th:nth-child(5),
    td:nth-child(5),
    th:nth-child(6),
    td:nth-child(6) {width: 10%;}
    thead {font-size: 20px;}
    tr {border-bottom: 1px solid white;}
    tbody {font-size: 8px;}
    /* Responsive design for smaller screens */
    @media screen and (max-width: 600px) {
        th, td {padding: 8px;}
    }
  </style>
</head>
<div>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Day 1: June 3</th>
                <th>Day 2: June 4</th>
                <th>Day 3: June 5</th>
                <th>Day 4: June 6</th>
                <th>Day 5: June 7</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Session 1 (9:15 am - 10:30 am)</td>
                <td><a href="http://tiny.cc/python-basics">Basics to Python - 1</a></td>
                <td><a href="https://drive.google.com/file/d/1oy7Fj0hY0M3PMDHctTiKYIhNSZ0zwRVz/view?usp=sharing">Autonomous Driving</a></td>
                <td><a href="https://docs.google.com/presentation/d/1f3btoVbry7jw5i1cHd9MCcaJM5wIGrRx43tqozDlaLk/edit?usp=sharing">How to use GenAI Responsibly</a></td>
                <td>Industry Visit</td>
                <td>Correlation vs Causality</td>
            </tr>
            <tr>
                <td>Session 2 (10:40 am - 11:55 am)</td>
                <td><a href="https://colab.research.google.com/drive/1ZvQwnJQAH5MKB4-o91H2c6s-K4xcJqfk?usp=sharing">Basics to Python - 2</a></td>
                <td>Grounding & Hallucination - 2</td>
                <td>Web app with ChatGPT - 1</td>
                <td><a href="https://docs.google.com/presentation/d/11HsoRNKiy6FIarwJeiEXKnXFbRdiVPbky-olkKcRjYo/edit#slide=id.p">AI in Manufacturing</a></td>
                <td><a href="https://emailsc-my.sharepoint.com/:p:/r/personal/nadimuthuv_sc_edu/Documents/Day%205_Session%202_AI%20Safety.pptx?d=w9ac51ce8b29e45069847618f71215561&csf=1&web=1&e=nfFJNv">AI and Safety</a></td>
            </tr>
            <tr>
                <td>Session 3 (12:20 pm - 1:35 pm)</td>
                <td><a href="https://docs.google.com/presentation/d/1WxyWzCS4FPMch1PrNBNRfUAg0jz4xi8bp1kSQDTXQcY/edit?usp=sharing">Generative AI</a></td>
                <td><a href="https://docs.google.com/presentation/d/19uw4iJ7d0tjpk7Aj8BhELVtO_AvrMYwDS3sst4t-g2Q/edit?usp=sharing">Neural Networks with Python</a></td>
                <td><a href="https://docs.google.com/presentation/d/1yD_uDQHGfBQ8IukkubFULxn51GHKxvc9GQ_es750ilU/edit?usp=sharing">Detecting AI Content for Safety</a></td>
                <td><a href="https://drive.google.com/file/d/1eVvVuTqhVlKuo7fOPTOXiKLvkYsazchM/view?usp=sharing">AI in Gaming</a></td>
                <td>None</td>
            </tr>
            <tr>
                <td>Session 4 (1:45 pm - 3:00 pm)</td>
                <td><a href="https://www.canva.com/design/DAGGuZ0kgV8/JKhxu6e8te-WTndPtnLx6g/edit?utm_content=DAGGuZ0kgV8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Grounding & Hallucination - 1</a></td>
                <td><a href="https://docs.google.com/presentation/d/12bXQ36VztMtHSwCd0V7lHy7q9cBxie8uoKIceGepvDI/edit?usp=sharing">Explainable Food Recommendation</a></td>
                <td>Web app with ChatGPT</td>
                <td>Using Analogy in Education</td>
                <td>None</td>
            </tr>
        </tbody>
    </table>
</div>


<!-- {%- assign start_epoch = site.data.schedule.start_date | date: '%s' -%}
{%- assign end_epoch = site.data.schedule.end_date | date: '%s' -%}
{%- assign seconds_in_day = 60 | times: 60 | times: 24 -%}
{%- assign start_days_epoch = start_epoch | divided_by: seconds_in_day -%}
{%- assign end_days_epoch = end_epoch | divided_by: seconds_in_day -%}
{%- assign valid_dates = "" | split: "" -%}
{%- for days_epoch in (start_days_epoch..end_days_epoch)-%}
  {%- assign date = days_epoch | times: seconds_in_day -%}
  {%- assign day_of_week = date | date: '%w' -%}
  {%- if site.data.schedule.class_days contains day_of_week -%}
    {%- assign valid_dates = valid_dates | push: date -%}
  {%- endif -%}
{%- endfor -%}

{%- comment -%}
  - Manually add any extra days we need to appear on the schedule.
  - Use extra_days in schedule.yml to control this.
{%- endcomment -%}
{%- for item in site.data.schedule.extra_days -%}
  {%- assign extra_day_epoch = item.date | date: '%s' | plus: 0 -%}
  {%- assign valid_dates = valid_dates | push: extra_day_epoch -%}
{%- endfor -%}

{%- comment -%}
  Sort days and group into weeks.
  sorted_dates is an array, where each element is a hash with three fields:
    - "name" is the week number (between 1 and 52)
    - "items" is an array of days we'll display in that week (in Unix time)
    - "size" is the number of days we'll display in that week
{%- endcomment -%}
{%- assign sorted_dates = valid_dates | sort | group_by_exp: "it", "it | date: '%U'" -%}

<div>
  <table>
    {%- comment -%}
      - Table header.
      - Use schedule.yml to change table widths.
    {%- endcomment -%}
    <thead>
      <th style="width:{{ site.data.schedule.week_width }}">Wk.</th>
      <th style="width:{{ site.data.schedule.date_width }}">Date</th>
      <th style="width:{{ site.data.schedule.lecture_width }}">Lecture<br>(<a href="{{ site.links.lecture }}">Zoom</a>)</th>
      <th style="width:{{ site.data.schedule.readings_width }}">Readings</th>
      <th style="width:{{ site.data.schedule.discussion_width }}">Discussion<br></th>
      <th style="width:{{ site.data.schedule.lab_width }}">Lab</th>
      <th style="width:{{ site.data.schedule.homework_width }}">Homework</th>
      <th style="width:{{ site.data.schedule.project_width }}">Project</th>
    </thead>

    {%- comment -%}
      Table body.
      - Fill in assignment names/links in lecture.yml, readings.yml,
        discussion.yml, lab.yml, and project.yml, not here.
      - In this code, we have five categories: lecture, discussion, readings,
        lab, and project. The code for rendering each column here
        is identical; the code for filling in the content of each column
        can be found in lecture.html, readings.html, discussion.html,
        lab.html, and project.html.
      - For each category/column, we keep track of three counters, which
        are described below.
    {%- endcomment -%}
    <tbody>

    {%- comment -%}
      - Initialize the index counters.
      - This indicates the next element in the yml array to be rendered.
      - You should not need to change or care about these.
    {%- endcomment -%}
    {%- assign survey_index = 0 -%}
    {%- assign lecture_index = 0 -%}
    {%- assign readings_index = 0 -%}
    {%- assign discussion_index = 0 -%}
    {%- assign lab_index = 0 -%}
    {%- assign homework_index = 0 -%}
    {%- assign project_index = 0 -%}

    {%- comment -%}
      - Initialize the rowspan counters.
      - For multi-row boxes (e.g. projects that span several weeks), we need to keep
        track of how many rows we need to skip before rendering another box.
      - You should not need to change or care about these.
    {%- endcomment -%}
    {%- assign lecture_rowspan = 0 -%}
    {%- assign readings_rowspan = 0 -%}
    {%- assign discussion_rowspan = 0 -%}
    {%- assign lab_rowspan = 0 -%}
    {%- assign homework_rowspan = 0 -%}
    {%- assign project_rowspan = 0 -%}

    {%- comment -%}
      - Initialize the number counters.
      - Each category/column contains a numbered list, and we automatically
        count upwards in this code. (For example, the lecture numbers are
        automatically generated in this code.)
      - Because not all elements in the yml array need to be numbered
        (e.g. "no lecture" days shouldn't add to the lecture number),
        the number ends up being different from the index counter above.
      - You can adjust the starting number (e.g. should we start at HW0 or
        HW1?) by editing the starting_number config variables in schedule.yml.
    {%- endcomment -%}
    {%- assign lecture_number = site.data.schedule.starting_lecture_number -%}
    {%- assign readings_number = site.data.schedule.starting_readings_number -%}
    {%- assign discussion_number = site.data.schedule.starting_discussion_number -%}
    {%- assign lab_number = site.data.schedule.starting_lab_number -%}
    {%- assign homework_number = site.data.schedule.starting_homework_number -%}
    {%- assign project_number = site.data.schedule.starting_project_number -%}

    {%- comment -%}
      - These are the default rowspans we assume if you don't provide one in
        the yml file.
      - See schedule.yml for more information on what these are, and to modify them.
    {%- endcomment -%}
    {%- assign default_lecture_rowspan = site.data.schedule.default_lecture_rowspan -%}
    {%- assign default_readings_rowspan = site.data.schedule.default_readings_rowspan -%}
    {%- assign default_discussion_rowspan = site.data.schedule.default_discussion_rowspan -%}
    {%- assign default_lab_rowspan = site.data.schedule.default_lab_rowspan -%}
    {%- assign default_homework_rowspan = site.data.schedule.default_homework_rowspan -%}
    {%- assign default_project_rowspan = site.data.schedule.default_project_rowspan -%}

    {%- for week in sorted_dates -%}

      {%- comment -%}
        - Since our for loop is iterating through weeks, we'll use the for
          loop's index to figure out which week we're in.
        - In Jekyll, forloop.index0 starts counting at 0, and forloop.index
          starts counting at 1. We use forloop.index0 if we want to count
          starting with Week 0, and forloop.index if we want to count starting
          with Week 1.
        - You can adjust whether the first week of class is Week 0 or Week 1
          by editing starting_week_number in schedule.yml.
      {%- endcomment -%}
      {%- if site.data.schedule.starting_week_number == '0' -%}
        {%- assign week_number = forloop.index0 -%}
      {%- else -%}
        {%- assign week_number = forloop.index -%}
      {%- endif -%}


      {%- comment -%}
        - This is how we get alternating colors per week.
        - This code is tied to the loop iterating through weeks, so we can
          currently only support alternating colors per week.
        - To change the shading color, edit td.is-even in _sass/custom/custom.scss.
        - The first week is light-colored. If you absolutely must make the first
          week shaded, change forloop.index to forloop.index0 just below this line.
      {%- endcomment -%}
      {%- assign is_even_mod = forloop.index | modulo:2 -%}
      {%- if is_even_mod == 0 -%}
        {%- assign is_even = "is-even" -%}
      {%- else -%}
        {%- assign is_even = "" -%}
      {%- endif -%}

      {%- comment -%}
        - In a given week, iterate through all the days in that week.
      {%- endcomment -%}
      {%- for day in week.items -%}
      <tr>
        {%- comment -%}
          - Render the week number column.
          - We use forloop.first to render the week number only once per week.
          - We use the "size" field of the week hash to see how many days we're
            going to display in the week, which tells us how many rows the week
            number needs to span.
          - We use the "name" field of the week hash to give us a unique week
            number (between 1 and 52), which gives each week number box a unique
            id, and thus allows us to implement the "jump to current week"
            functionality.
        {%- endcomment -%}
        {%- if forloop.first -%}
          {%- assign survey_element = site.data.weekly_surveys.weekly_surveys[survey_index] -%}
          <td class="{{ is_even }} week" rowspan="{{ week.size }}" id="week-{{ week.name }}">
            {{ week_number }}
            {%- unless survey_element.no_survey -%}
              <br>
              {%- if survey_element.link != nil -%}
                <a href="{{ survey_element.link }}">Survey</a>
              {%- else -%}
                <a class="disabled">Survey</a>
              {%- endif -%}
            {%- endunless -%}
          </td>
          {%- assign survey_index = survey_index | plus:1 -%}
        {%- endif -%}

        {%- comment -%}
          - Render the date column.
          - The percent formatters determine how the date is displayed.
            See this link for what percent formatters are available:
            https://shopify.github.io/liquid/filters/date/
          - The border-hack exists because Just the Docs is very dumb
            and insists on clearing borders when td:first-of-type. This affects
            the date column only, and hopefully this hack doesn't require any
            touching to keep working (it just re-adds the border back).
        {%- endcomment -%}
        <td class="{{ is_even }} border-hack">{{ day | date: '%a<br>%b %d' }}</td>

        {%- comment -%}
          - There are four chunks of code below this, for rendering the
            lecture/readings/discussion/lab/project columns. For
            simplicity, the chunks of code are identical (only swapping
            out the column names); I highly recommend not changing one
            of them individually. If you want to customize a column, you
            should be doing that in lecture.html, discussion.html,
            lab.html, or project.html.
          - In each chunk, we check if the rowspan counter has hit 0.
            If so, then it's time to render a new box.
            - Using the index counter, we access the next element in the
              yml file for rendering.
            - If the element in the yml file has a custom rowspan, we note that.
              Otherwise, we use the default rowspan.
            - Now we render a new box by using one of the _includes. We pass in:
                - element: The data from the yml file
                - number: The number counter from this code
                - rowspan: The rowspan (custom or default) from this code
                - is_even: The alternating color setting from this code
            - We reset the rowspan counter to start counting down from the new
              rowspan, so that when we hit 0, we'll render the next box.
            - We increment the index counter so that we can render the next
              element in the yml array next time.
            - If the "nonumber" field is True in the yml for this element, then
              we don't increment the number counter. (e.g. if we have a box with
              "no lecture", we don't need to increment the lecture number).
          - If the rowspan counter did not hit 0, we just decrement the rowspan
            counter and keep looping through days/weeks until it's time to render
            a new box.
        {%- endcomment -%}

        {%- comment -%}
          - Render the lecture column.
          - For simplicity, the code for each column should be kept identical (only
            swapping out the column names.
        {%- endcomment -%}
        {%- if lecture_rowspan == 0 -%}
          {%- assign lecture_element = site.data.lectures.lectures[lecture_index] -%}
          {%- if lecture_element.rowspan -%}
            {%- assign new_rowspan = lecture_element.rowspan -%}
          {%- else -%}
            {%- assign new_rowspan = default_lecture_rowspan -%}
          {%- endif -%}
          {%- include lecture.html element=lecture_element number=lecture_number rowspan=new_rowspan is_even=is_even classes=lecture_element.classes  -%}
          {%- assign lecture_rowspan = new_rowspan | plus:-1 -%}
          {%- assign lecture_index = lecture_index | plus:1 -%}
          {%- unless lecture_element.nonumber -%}
            {%- assign lecture_number = lecture_number | plus:1 -%}
          {%- endunless -%}
        {%- else -%}
          {%- assign lecture_rowspan = lecture_rowspan | plus:-1 -%}
        {%- endif -%}

        {%- comment -%}
          - Render the readings column.
          - For simplicity, the code for each column should be kept identical (only
            swapping out the column names.
          - Slightly breaking my own rule here by using lectures.yml, as keeping
            readings/lectures together feels more natural. TODO: might clean this later.
        {%- endcomment -%}
        {%- if readings_rowspan == 0 -%}
          {%- assign lecture_element = site.data.lectures.lectures[readings_index] -%}
          {%- assign readings_element = lecture_element.readings -%}
          {%- if lecture_element.rowspan -%}
            {%- assign new_rowspan = lecture_element.rowspan -%}
          {%- else -%}
            {%- assign new_rowspan = default_readings_rowspan -%}
          {%- endif -%}
          {%- include readings.html element=readings_element number=readings_number rowspan=new_rowspan is_even=is_even  -%}
          {%- assign readings_rowspan = new_rowspan | plus:-1 -%}
          {%- assign readings_index = readings_index | plus:1 -%}
          {%- unless lecture_element.nonumber -%}
            {%- assign readings_number = readings_number | plus:1 -%}
          {%- endunless -%}
        {%- else -%}
          {%- assign readings_rowspan = readings_rowspan | plus:-1 -%}
        {%- endif -%}

        {%- comment -%}
          - Render the discussion column.
          - For simplicity, the code for each column should be kept identical (only
            swapping out the column names.
        {%- endcomment -%}
        {%- if discussion_rowspan == 0 -%}
          {%- assign discussion_element = site.data.discussions.discussions[discussion_index] -%}
          {%- if discussion_element.rowspan -%}
            {%- assign new_rowspan = discussion_element.rowspan -%}
          {%- else -%}
            {%- assign new_rowspan = default_discussion_rowspan -%}
          {%- endif -%}
          {%- include discussion.html element=discussion_element number=discussion_number rowspan=new_rowspan is_even=is_even -%}
          {%- assign discussion_rowspan = new_rowspan | plus:-1 -%}
          {%- assign discussion_index = discussion_index | plus:1 -%}
          {%- unless discussion_element.nonumber -%}
            {%- assign discussion_number = discussion_number | plus:1 -%}
          {%- endunless -%}
        {%- else -%}
          {%- assign discussion_rowspan = discussion_rowspan | plus:-1 -%}
        {%- endif -%}

        {%- comment -%}
          - Render the lab column.
          - For simplicity, the code for each column should be kept identical (only
            swapping out the column names.
        {%- endcomment -%}
        {%- if lab_rowspan == 0 -%}
          {%- assign lab_element = site.data.labs.labs[lab_index] -%}
          {%- if lab_element.rowspan -%}
            {%- assign new_rowspan = lab_element.rowspan -%}
          {%- else -%}
            {%- assign new_rowspan = default_lab_rowspan -%}
          {%- endif -%}
          {%- include lab.html element=lab_element number=lab_number rowspan=new_rowspan is_even=is_even  -%}
          {%- assign lab_rowspan = new_rowspan | plus:-1 -%}
          {%- assign lab_index = lab_index | plus:1 -%}
          {%- unless lab_element.nonumber -%}
            {%- assign lab_number = lab_number | plus:1 -%}
          {%- endunless -%}
        {%- else -%}
          {%- assign lab_rowspan = lab_rowspan | plus:-1 -%}
        {%- endif -%}

        {%- comment -%}
          - Render the homework column.
          - For simplicity, the code for each column should be kept identical (only
            swapping out the column names.
        {%- endcomment -%}
        {%- if homework_rowspan == 0 -%}
          {%- assign homework_element = site.data.homeworks.homeworks[homework_index] -%}
          {%- if homework_element.rowspan -%}
            {%- assign new_rowspan = homework_element.rowspan -%}
          {%- else -%}
            {%- assign new_rowspan = default_homework_rowspan -%}
          {%- endif -%}
          {%- include homework.html element=homework_element number=homework_number rowspan=new_rowspan is_even=is_even  -%}
          {%- assign homework_rowspan = new_rowspan | plus:-1 -%}
          {%- assign homework_index = homework_index | plus:1 -%}
          {%- unless homework_element.nonumber -%}
            {%- assign homework_number = homework_number | plus:1 -%}
          {%- endunless -%}
        {%- else -%}
          {%- assign homework_rowspan = homework_rowspan | plus:-1 -%}
        {%- endif -%}

        {%- comment -%}
          - Render the project column.
          - For simplicity, the code for each column should be kept identical (only
            swapping out the column names.
        {%- endcomment -%}
        {%- if project_rowspan == 0 -%}
          {%- assign project_element = site.data.projects.projects[project_index] -%}
          {%- if project_element.rowspan -%}
            {%- assign new_rowspan = project_element.rowspan -%}
          {%- else -%}
            {%- assign new_rowspan = default_project_rowspan -%}
          {%- endif -%}
          {%- include project.html element=project_element number=project_number rowspan=new_rowspan is_even=is_even  -%}
          {%- assign project_rowspan = new_rowspan | plus:-1 -%}
          {%- assign project_index = project_index | plus:1 -%}
          {%- unless project_element.nonumber -%}
            {%- assign project_number = project_number | plus:1 -%}
          {%- endunless -%}
        {%- else -%}
          {%- assign project_rowspan = project_rowspan | plus:-1 -%}
        {%- endif -%}

      </tr>
      {%- endfor -%}
    {%- endfor -%}
    </tbody>
  </table>
</div> -->