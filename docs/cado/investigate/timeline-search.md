---
title: Timeline Search
hide_title: true
sidebar_position: 3
---


# What is the Timeline Tab?

The **Timeline** tab in the / Forensic Acquisition and Investigation platform provides an advanced search interface that supports complex queries to help you filter and analyze investigation data efficiently.

### Faceted Search

/ Forensic Acquisition and Investigation enables you to filter search results using **facets**, such as event severity, associated usernames, files, or source/destination IP addresses.

![Faceted Search](/img/faceted-search.png)

For long lists of facets, you can easily search and sort through them.

![Faceted List](/img/facet-list.png)

### Basic Searches

You can also use the search bar to perform specific queries using search strings.

#### Plain Search Terms
A plain search term will search across all fields. For example: `foo`

If the term contains spaces, enclose it in quotes: `"foo bar"`

#### Field-Specific Searches
To search within a specific field, prepend the field name to the search term. For example:
- `user: Chris`
- `extra: "foo bar"`

#### Ranges
You can search for a range of values within a field. For example:
- `file_size: [1024 TO 8196]`

### Building Complex Queries

You can combine search terms using `AND`, `OR`, and `NOT`, and use parentheses to group them:

Example: 
```
alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"
```

:::info
Without parentheses, `AND` operations are evaluated before `OR`. For example:
```
user: "Chris" AND user: "James" OR filename: "/foo/bar.txt"
```
is treated as:
```
(user: "Chris" AND user: "James") OR filename: "/foo/bar.txt"
```
:::

## Searchable Fields

The following fields are searchable:

| Field               | Type     | Description                                                                                                           |
|---------------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| `macb`              | keyword  | A 4-character string encoding MACB information (e.g., `M..B` for Modified and Birth events).                           |
| `source`            | keyword  | The type of file or data producing this event (e.g., `EVT`, `CLOUDTRAIL`, `FILE`).                                     |
| `sourcetype`        | keyword  | More specific subtype of `source`.                                                                                     |
| `type`              | keyword  | A `;` separated list of event types (e.g., `Last Executed Time`, `Updated Time`, `Creation Time`).                      |
| `user`              | keyword  | The user associated with the event.                                                                                    |
| `host`              | keyword  | The hostname linked to the event.                                                                                      |
| `filename`          | special  | The path of the file related to the event.                                                                             |
| `full_filename`     | keyword  | The full path of the file, supports regex and must match the entire path.                                               |
| `inode`             | keyword  | The inode number of the file.                                                                                          |
| `source_hostname`   | keyword  | The source hostname for network connections.                                                                            |
| `destination_hostname`| keyword| The destination hostname for network connections.                                                                      |
| `tag`               | keyword  | Tag representing the event type (e.g., `Network Logon`, `File Access`, `Execution`).                                   |
| `executed_process`  | keyword  | The path of an executed file, if detected.                                                                             |
| `short`             | text     | Short text providing additional event details.                                                                         |
| `extra`             | text     | Additional data from the raw event, longer than `short`.                                                               |
| `alarm_severity`    | int      | Severity of the event (Malicious: `1`, Suspicious: `3`, Other: `10`).                                                  |
| `isFolder`          | boolean  | Whether the event is related to a folder.                                                                              |
| `evidence_id`       | int      | ID of the evidence item.                                                                                               |
| `timestamp`         | int      | Unix timestamp of the event.                                                                                           |
| `file_size`         | int      | The size of the file related to the event.                                                                             |
| `sha256`            | text     | SHA-256 hash of the file related to the event.                                                                         |
| `strings`           | text     | Extracted strings from the file related to the event.                                                                  |
| `is_starred`        | bool     | Whether the event is starred.                                                                                          |
| `for_report`        | bool     | Whether the event is included in a report.                                                                             |
| `alarm_description` | keyword  | A short description explaining the reason for an alarm.                                                                |
| `alarm_attack`      | keyword  | MITRE ATT&CK tactic or technique code.                                                                                 |
| `attribute_name`    | keyword  | File attribute information (e.g., `$STANDARD_INFORMATION`, `$FILENAME`).                                               |

### Notes on Search Behavior:
- Fields of type `int` or `keyword` require exact matches.
- Wildcard characters (`*` for multiple, `?` for single) can be used in `keyword` fields.
- Fields of type `text` support partial matches.

Example:
- `user: chris` matches `user` field with value `chris`.
- `user: ch*` matches `chris` or any string starting with `ch`.
- `user: ch` does not match as it requires a full or wildcard match.

Searching `strings: content` will return events with matching data, such as `"This is some example content."`.
