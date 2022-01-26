---
title: Advanced Search (beta)
hide_title: true
sidebar_position: 4
---

# Advanced Timeline Search (beta)
As of Release 0.9.2.4, the Cado Response platform includes a beta version of the new advanced search interface which supports complex queries. You can enable it by toggling "New Search (Beta)" on the Timeline Search interface:

![Search Help - beta](/img/search-help.png)

:::info
Search will default to the old interface as we receive feedback on the beta interface. We are aware of issues with scroll, pivoting and the number of results when using the beta search interface.
:::

### Basic Searches

#### Plain search terms
Providing plain search term will search across all fields, for example: `foo`

You can quote terms containing spaces: `"foo bar"`

#### Fields
You can search a specific field by prepending it to the search term: `user: Chris` OR  `extra: "foo bar"`

#### Ranges
You can restrict a field to a range of values: `severity: [0 TO 5]`

### Building complex queries
You can build complex queries using `AND`, `OR` and `NOT` to combine terms, and brackets to group `()`:

For example: `alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"`


## Fields
Searchable fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `macb` | keyword | 4 character string which encoding MACB information for this event. An `M` in position 0 indicates this is a Modified event and a `.` represents a non-modified event. e.g. `M..B` indicates modified and birth. |
| `source` | keyword | The type of the file or data that produced this event e.g. `EVT`,  `CLOUDTRAIL`, `FILE`, `JAVA_IDX`, `LOG`. |
| `sourcetype` | keyword | More specific subtype of `source` |
| `type` | keyword | `;` separated list of event types, e.g. `Last Executed Time`, `Updated Time`, `Content Modification Time`, `Creation Time`. |
| `user` | keyword | User associated with the event |
| `host` | keyword | Host name associated with the event |
| `filename` | special | The path of the file associated with this event |
| `inode` | keyword | The inode number of the file associated with this event |
| `source_hostname` | keyword | For network connections, the hostname that it originated from |
| `destination_hostname` | keyword | For network connections, the destination hostname |
| `tag` | keyword | Tag representing type of event e.g. `Network Logon`, `File Access`, `Execution` |
| `executed_process` | keyword | Where we detect a process execution, the path of the executed file |
| `short` | text | Short text providing additional data from raw event |
| `extra` | text | Longer text, providing more raw data than `short` |
| `alarm_severity` | int | Severity of event based on detections. Malicious `1`, Suspcious `3`, Other `10` |
| `evidence_id` | int | ID of evidence item |
| `timestamp` | int | Unix timestamp of event |
| `file_size` | int | size of file associated with this event |
| `md5` | text | md5 hash of file associated with this event |
| `sha1` | text | sha1 hash of the file associated with this event |
| `sha256` | text | sha256 of the file associated with this event |
| `strings` | text | Strings extracted from file associated with this event |
| `is_starred` | bool | Whether an event is starred |
| `for_report` | bool | Whether an event is included in the report |

Fields of type `int` or `keyword` require the search term to match exactly in order to return a result. For example, for an event with `user` equal to `chris`, the search term:
 - `user: chris` matches
 - `user: ch*` matches
 - `user: ch` does not match

Fields of type `keyword` support wildcard characters. Use `?` as a single-character wildcard and `*` for any number of characters.

Fields of type `text` do not require a full match. E.g. searching for `strings: content` will return the event with the following strings data: `This is some example content`.